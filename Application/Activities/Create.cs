using Domain;
using MediatR;
using Persistence;

//Commands dont return anything. Queries return one object or an object list
namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity Activity{ get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                //Since no data is being stored in database right now (only in memory), the is no need to use AddAsync
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
            }
        }
    }
}