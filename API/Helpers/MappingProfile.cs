using API.Dto;
using AutoMapper;
using Entity;

namespace API.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Course, CourseDto>()
            .ForMember(c => c.Category, o => o.MapFrom(s => s.Category.Name));

            CreateMap<Category, CategoriesDto>();

            CreateMap<Category, CategoryDto>();
        
            CreateMap<Learning, LearningDto>();

            CreateMap<Requirement, RequirementDto>();
        }
    }
}