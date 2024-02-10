SELECT OrderID, SUM(UnitPrice*Quantity) AS TotalCost
FROM Order_Details
GROUP BY OrderID