using Infrastructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorsController : BaseController
    {
        private readonly StoreContext _context;

        public ErrorsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet("authcheck")]
        [Authorize]

        public ActionResult<string> CheckAuthorization()
        {
            return "You are Authorized";
        }

        [HttpGet("notFound")]

        public ActionResult NotFoundMethod()
        {
            var category = _context.Categories.Find(42);

            if (category == null) return NotFound();

            return Ok();
        }

        [HttpGet("serverError")]

        public ActionResult ServerErrorMethod()
        {
            var category = _context.Categories.Find(42);

            return Ok(category.ToString());
        }

        [HttpGet("badRequest")]

        public ActionResult badRequestMethod()
        {
            return BadRequest();
        }

        [HttpGet("badRequest/{id}")]

        public ActionResult badIdMethod(int id)
        {
            return Ok();
        }
    }
}