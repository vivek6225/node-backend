

-- Select first name, last name from Person table
-- and city, state from Address table
SELECT p.firstName, p.lastName, a.city, a.state

-- Person table is written after FROM,
-- so Person becomes the LEFT table.
-- All persons will be shown even if address is missing.
FROM Person p

-- LEFT JOIN means:
-- keep all records from Person table
LEFT JOIN Address a

-- Match Person and Address using personId
ON p.personId = a.personId;
