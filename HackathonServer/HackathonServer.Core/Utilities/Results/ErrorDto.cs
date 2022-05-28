namespace HackathonServer.Core.Utilities.Results
{
    public class ErrorDto
    {
        public List<string> Errors { get; private set; } = new List<string>();

        public ErrorDto(string error)
        {
            Errors.Add(error);
        }

        public ErrorDto(List<string> errors)
        {
            Errors = errors;
        }
    }

    public class Response
    {
        public ErrorDto Error { get; private set; }

        public Response(ErrorDto errorDto)
        {
            Error = errorDto;
        }
    }
}
