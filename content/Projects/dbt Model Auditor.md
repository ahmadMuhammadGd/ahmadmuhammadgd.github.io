---
tags:
    - dbt 
    - sql
---

📎 [Blog Post](https://dev.to/ahmadmuhammad/dbt-data-quality-audit-but-on-steroid-4bi9) | [GitHub Repo](https://github.com/ahmadMuhammadGd/dbt-audit-on-steroid)


**Why**:  
dbt tests overwrite previous failure records for the same test,this makes it hard to trace data quality issues over time.

**What**:  
dbt macro to store failures `historically` for data quality traceability, in addition to calculating failure percentage KPI over the time.

**How**:  
- Used `dbt graph context` to process model dependencies.

- Generalized dbt macro to store these errors.

- Simple bash-orchestrated `Write-Audit-Publish (WAP)` pipeline with this approach.

> [!tip]
> The generalized solution assumes that tests return individual failed rows, not aggregated counts.