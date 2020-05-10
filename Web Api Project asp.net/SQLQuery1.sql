use LSJPR1_NET34
go

create table employee(
empId int primary key,
empName varchar(20),
deptName varchar(30)
)

insert into employee values(101,'Yashika','Cyber Security')
insert into employee values(102,'Prasang','Web Development')
insert into employee values(103,'Arushi','Java Developer')
insert into employee values(104,'Ram','Learning')
insert into employee values(105,'Sahil','Python')



create table department(
deptId int primary key,
deptName varchar(30),
)

insert into department values(1001,'Coding Department')
insert into department values(1002,'Learning Department')
insert into department values(1003,'Marketing Department')
insert into department values(1004,'Testing Department')
insert into department values(1005,'HR Department')

select * from employee
select * from department
