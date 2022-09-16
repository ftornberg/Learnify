using Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorsControllers : BaseController
    {
        private readonly StoreContext _context;

        public ErrorsControllers(StoreContext context)
        {
            _context = context;
        }

        [HttpGet("notFound")]

        public ActionResult NotFoundMethod()
        {
            var category = _context.Categories.Find(42);

            if(category == null) return NotFound();

            return Ok();
        }
    }
}