export const Contact = () => {
    return (
            <div className="contact">
              <h1>Contact Us</h1>
              <form>
                <div className="form">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
        );
};
      