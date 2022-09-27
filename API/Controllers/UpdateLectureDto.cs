using System;

namespace API.Controllers
{
    public class UpdateLectureDto
    {
        public int LectureId { get; set; }
        public Guid CourseId { get; set; }
    }
}