using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dto
{
    public class UserLectureDto
    {
        public string CourseName { get; set; }
        public List<SectionDto> Sections { get; set; }
        public int CurrentLecture { get; set; }
    }
}