using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user); // just update tracking data, not interact with persistent database
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserAsync(int id);
        Task<AppUser> GetUserAsync(string username);
        Task<MemberDto> GetMemberAsync(string username);
        Task<IEnumerable<MemberDto>> GetMembersAsync();
    }
}