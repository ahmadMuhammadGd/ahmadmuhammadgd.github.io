---
---

- Prefer pipelines as **code**, not GUIs.

- Every transformation should be:
  - Transparent -> Data governance, lineage and audits. 
  - Versioned  -> Check [this repo](https://github.com/ahmadMuhammadGd/northwind-dbt)
  - Idempotent → Check [this article](./Blogs/Modeling%20Slowly%20Changing%20Dimension%20Type%202%20In%20SQL.md) 
  - Testable -> Check [this repo](https://github.com/ahmadMuhammadGd/GA4-analytics)
  - Reproducible → Check [this article](./Blogs/Modeling%20Slowly%20Changing%20Dimension%20Type%202%20In%20SQL.md) 

---

- Pipelines encode business meaning layer by layer: raw → staged → modeled. See [this repo](https://github.com/ahmadMuhammadGd/Data-Quality-with-Nessie)

- ~~What works in SQL should be in SQL~~ I was wrong. Complex transformations are often cleaner in Python.

- Governance is a baseline requirement.

--- 

- Your pipeline is not done if it’s undocumented.
- Your model is not tested if it breaks silently.