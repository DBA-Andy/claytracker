# Clay Tracker
Currently scores are tracked using pieces of paper, which works fine, but I've already lost most of the scores from this past year. Additionally, if you want to do any sort of analysis, you'll have to copy all of the scores into a CSV file/database manually. The goal for this project is to build an application that can be used to track scores on the course and analyze them later. 

# Tech Stack
The tech stack is subject to change, but at the moment the following technologies are being used to create the application:
- **RocksDB** - Storage Engine that should handle database transactions, etc.
- **C/C++** - Acts as a glue between RocksDB and the REST API
- **Golang** - Create REST API and interact with RocksDB using cgo
- **Javascript** - Handle events, data output, etc.
- **CSS/Tailwinds** - Handle styling 

It should be noted that RocksDB might be swapped out for Postgres for a few reasons:
- The data we are working with is relational
- If this is hosted in the cloud, RDS could be used so we don't have to manage the database

# Future Features
- Graph scores
- Include additional courses
- OCR to read score cards 
- Use device GPS coordinates to automatically identify current station

# Links 
- [Building](BUILD.md)
- [Testing](TESTING.md)
- [Misc Info](MISC_INFO.md)