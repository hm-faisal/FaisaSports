const UserHelpDesk = () => {
  return (
    <>
      <h2 className="text-4xl font-bold my-6 text-center">User Help Desk</h2>
      <div className="flex justify-center items-center my-8 gap-8">
        <div className="help-Text">
          <h2 className="text-2xl font-bold my-6 ">Submit Your Issue</h2>
          <p className="">Here you can submit an issue if you want.</p>
          <p className="my-2">
            This may Help out next user Smooth browsing, Thank You
          </p>
        </div>
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Submit Your Issue</h2>
          <form>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Describe your issue..."
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default UserHelpDesk;
