import json
from scholarly import scholarly


AUTHOR_ID = "5HdwG1wAAAAJ" 

def fetch_publications():
    print(f"Fetching profile for ID: {AUTHOR_ID}")
    try:
        author = scholarly.search_author_id(AUTHOR_ID)
        scholarly.fill(author, sections=['publications'])
        
        publications_data = []
        
        for pub in author['publications']:
            # Fill the publication to get full details (like venue/journal)
            scholarly.fill(pub)
            
            pub_info = pub['bib']
            title = pub_info.get("title", "")
            venue = pub_info.get("journal", pub_info.get("venue", "Unknown Venue"))
            publisher = pub_info.get("publisher", "")
            
            # 1. Filter out Ph.D. dissertations and Master/Bachelor theses
            title_lower = title.lower()
            venue_lower = venue.lower()
            publisher_lower = publisher.lower()
            
            if any(term in title_lower or term in venue_lower or term in publisher_lower for term in ["thesis", "dissertation"]):
                print(f"Skipped dissertation/thesis: {title[:35]}...")
                continue
            
            # Format to match our website's expected JSON structure
            publications_data.append({
                "year": str(pub_info.get("pub_year", "Preprint")).strip(),
                "title": title,
                "authors": pub_info.get("author", "").replace("Vivin Vinod", "<strong>Vivin Vinod</strong>"),
                "venue": venue,
                "links": {
                    "Scholar": pub.get("pub_url", "#")
                }
            })
            print(f"Added: {title[:35]}...")

        # 2. Sort publications in Descending Order (Newest first)
        # Preprints and non-numeric years are placed at the very top (assigned pseudo-year 9999)
        def get_sort_year(item):
            year_str = item.get("year", "Preprint")
            if year_str.isdigit():
                return int(year_str)
            return 9999

        publications_data.sort(key=get_sort_year, reverse=True)

        # Save the cleanly sorted and filtered list to JSON file
        with open('publications.json', 'w', encoding='utf-8') as f:
            json.dump(publications_data, f, indent=2, ensure_ascii=False)
            
        print(f"Successfully updated and sorted publications.json! ({len(publications_data)} items preserved)")
        
    except Exception as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    fetch_publications()
