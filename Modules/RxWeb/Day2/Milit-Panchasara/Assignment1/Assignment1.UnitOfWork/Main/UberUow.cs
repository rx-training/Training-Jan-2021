using RxWeb.Core.Data;
using Assignment1.BoundedContext.Main;

namespace Assignment1.UnitOfWork.Main
{
    public class UberUow : BaseUow, IUberUow
    {
        public UberUow(IUberContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IUberUow : ICoreUnitOfWork { }
}


