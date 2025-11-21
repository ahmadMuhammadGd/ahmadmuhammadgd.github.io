---
tags:
    - dbt 
    - sql
---

<!-- 📎 [GitHub Repo](https://github.com/ahmadMuhammadGd/dbt-audit-on-steroid) -->

<h2 align="center">
  <a href="https://dev.to/ahmadmuhammad/dbt-data-quality-audit-but-on-steroid-4bi9">
    <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3fdbujjunoliacz1z5no.png" />
    📎 Dev.to: dbt Data Quality Audit, But on Steroid
  </a>
</h2>

---

## Problem Statement 
dbt tests overwrite previous failure records for the same test,this makes it hard to trace data quality issues over time.

## Proposed Solution
dbt macro to store failures `historically` for data quality traceability, in addition to calculating failure percentage KPI over the time.

## Approach
- Used `dbt graph context` to process model dependencies.

- Generalized dbt macro to store these errors.

- Simple bash-orchestrated `Write-Audit-Publish (WAP)` pipeline with this approach.


> [!tip]
> The generalized solution assumes that tests return individual failed rows, not aggregated counts.