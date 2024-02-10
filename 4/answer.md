SELECT t.TerritoryDescription, r.RegionDescription
FROM Territory AS t
JOIN Region AS r ON t.RegionID = r.RegionID