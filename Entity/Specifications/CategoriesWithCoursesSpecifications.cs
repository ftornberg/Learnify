using System;
using System.Linq.Expressions;

namespace Entity.Specifications
{
    public class CategoriesWithCoursesSpecifications : BaseSpecification<Category>
    {
        public CategoriesWithCoursesSpecifications(int id) : base(x => x.Id == id)
        {
            IncludeMethod(c => c.Courses);
        }
    }
}