set autocommit = 0;
start transaction;
delete from table;
select * from table;

rollback;