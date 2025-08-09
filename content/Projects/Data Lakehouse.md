---
tags:
  - s3
  - spark
  - python
  - airflow
---


📎 [GitHub Repo](https://github.com/ahmadMuhammadGd/Fraud-Detection-Data-LakeHouse)


> [!warning]
> Not production grade. Intended for experiment and prototypes.


**What:**  
A lakehouse environment, deployed via Docker Compose for local experimentation.

**Why:**  
Demonstrate the ability to design and orchestrate a complex, multi-service data platform.  


**How:**  
![System Overview Diagram](https://github.com/ahmadMuhammadGd/Fraud-Detection-Data-LakeHouse/blob/version1/assets/system-overview.jpg?raw=true)
- **Streaming Layer:** `Kafka` ingests simulated transactions into `Iceberg` bronze tables.  
- **Batch Layer:** `Airflow` triggers `PyMongo-based Spark jobs` to pull customer + fraud records from `MongoDB` into `Iceberg`.  
- **Data Cleaning:** Custom Python module applying multiple strategies (drop duplicates, validate schema, filter anomalies).  
- **Transformation:** `SQL` + `Jinja` templates transform bronze → silver datasets.  
- **Catalog & Storage:** `Nessie` for versioned metadata, `MinIO` for `S3`-compatible storage.  
- **Serving Layer:** `Dremio` auto-configured via `REST API` to expose datasets for BI tools.  
- **Orchestration:** `Airflow` DAGs with a custom `SSH Spark operator` to run remote jobs.  

