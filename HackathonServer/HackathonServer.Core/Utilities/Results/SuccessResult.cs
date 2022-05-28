namespace HackathonServer.Core.Utilities.Results
{
    public class SuccessResult : Result
    {
        public SuccessResult(string successMessage) : base(true, successMessage)
        {

        }

        public SuccessResult() : base(true)
        {

        }
    }
}
