using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: Employee
        public List<employee> Get()
        {
            // create object of DbContext class
            LSJPR1_NET34Entities1 db = new LSJPR1_NET34Entities1();

            List<employee> emps = db.employees.ToList();
            db.Configuration.LazyLoadingEnabled = false;

            return emps;
        }
      /*  public employee Post(employee emp)
        {
            if (ModelState.IsValid)
            {
                LSJPR1_NET34Entities1 db = new LSJPR1_NET34Entities1();

                //insert data to DbSet
                db.employees.Add(emp);
                db.SaveChanges();
                return emp;
           }
            else
            {
                return null;
            }
        }

        public string Delete(int empid)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    LSJPR1_NET34Entities1 db = new LSJPR1_NET34Entities1();
                    employee empObj = db.employees.Where(temp => temp.empId == empid).FirstOrDefault();
                    db.employees.Remove(empObj);
                    db.SaveChanges();

                    return "successfully deleted";

                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }*/
    }
}