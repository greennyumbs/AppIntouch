Note: เนื่องจากการใช้ condition statement ค่อนข้างยุ่งยากกว่าการจัดการ query request ก่อนสร้าง pool connection
การรับ parameter ประเภทของเอกสารการเบิกเงินทั้ง 3 รูปแบบเพื่อแยกจัดการ query request จะเป็นวิธีที่สะดวกและเป็นระเบียบมากกว่า

(Case 1 - เอกสารเบิกค่าใช้จ่าย)
SELECT  d.DocumentID AS เลขที่เอกสาร,
        d.ReferenceNo AS เลขที่ใบเบิก,
        d.DocumentDate AS วันที่เอกสาร,
        d.Subject AS เรื่อง, 
        u.EmployeeName AS ผู้ออกเอกสาร,
        u.EmployeeName AS ผู้ขอเบิก, 
        f.DifferenceAmount AS จำนวนเงิน (บาท)
FROM Document AS d
JOIN SuUser AS u ON d.CreatorID = u.UserID AND d.RequesterID = u.UserID
JOIN FnExpenseDocument AS f ON d.DocumentID = f.DocumentID;

(Case 2 - เอกสารเบิกเงินล่วงหน้า)
SELECT  d.DocumentID AS เลขที่เอกสาร,
        d.ReferenceNo AS เลขที่ใบเบิก,
        d.DocumentDate AS วันที่เอกสาร,
        d.Subject AS เรื่อง, 
        u.EmployeeName AS ผู้ออกเอกสาร,
        u.EmployeeName AS ผู้ขอเบิก, 
        av.Amount AS จำนวนเงิน (บาท)
FROM Document AS d
JOIN SuUser AS u ON d.CreatorID = u.UserID AND d.RequesterID = u.UserID
JOIN AvAdvanceDocument AS av ON d.DocumentID = av.DocumentID;

(Case 3 - เอกสารคืนเงิน)
SELECT  d.DocumentID AS เลขที่เอกสาร,
        d.ReferenceNo AS เลขที่ใบเบิก,
        d.DocumentDate AS วันที่เอกสาร,
        d.Subject AS เรื่อง, 
        u.EmployeeName AS ผู้ออกเอกสาร,
        u.EmployeeName AS ผู้ขอเบิก, 
        fr.TotalAmount AS จำนวนเงิน (บาท)
FROM Document AS d
JOIN SuUser AS u ON d.CreatorID = u.UserID AND d.RequesterID = u.UserID
JOIN FnRemittance AS fr ON d.DocumentID = fr.DocumentID;