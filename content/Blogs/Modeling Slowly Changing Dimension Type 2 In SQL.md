---
tags:
    - dbt 
    - sql
---

<!-- 📎 [Blog Post](https://dev.to/ahmadmuhammad/capture-slowly-changing-attributes-in-sql-scd-type-2-3d39) | [GitHub Repo](https://github.com/ahmadMuhammadGd/Capture-Slowly-Changing-Attributes-in-SQL---Type-2) -->

<h2 align="center">
  <a href="https://dev.to/ahmadmuhammad/capture-slowly-changing-attributes-in-sql-scd-type-2-3d39">
    <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl8pgci0yksimbx4nfgjy.png" />
    📎 Dev.to: Capture Slowly Changing Attributes in SQL - SCD Type 2
  </a>
</h2>

---

## Goal
To prove that:  
- Pure SQL alone is expressive enough to handle the hashing, change detection, and period tracking in a transparent, auditable way.
- SCD are still relevant, poorly organized data = messy workflow = no output


## Approach 
- `Hashed` the tracked attributes.

- `LAG()` to detect changes between versions for the same business key.

- `LEAD()` to assign validity periods (valid_from / valid_to).


## Deliverables
- A reproducible SQL pattern for implementing Slowly Changing Dimensions Type 2 directly in your database.

- Open to extend - closed to modification `SQL` pipeline.
