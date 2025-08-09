---
tags:
    - dbt 
    - sql
---

📎 [Blog Post](https://dev.to/ahmadmuhammad/capture-slowly-changing-attributes-in-sql-scd-type-2-3d39) | [GitHub Repo](https://github.com/ahmadMuhammadGd/Capture-Slowly-Changing-Attributes-in-SQL---Type-2)


**Why**:  
To prove that:  
- Pure SQL alone is expressive enough to handle the hashing, change detection, and period tracking in a transparent, auditable way.
- SCD are still relevant, poorly organized data = messy workflow = no output

**What**:  
- A reproducible SQL pattern for implementing Slowly Changing Dimensions Type 2 directly in your database.

- Open to extend - closed to modification `SQL` pipeline.

**How**:  
- `Hashed` the tracked attributes.

- `LAG()` to detect changes between versions for the same business key.

- `LEAD()` to assign validity periods (valid_from / valid_to).

