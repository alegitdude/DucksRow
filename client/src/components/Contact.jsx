import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <h2 className="cta-heading">Join Our Mailing List!</h2>
        <h3 className="cta-text">
          Receive coupons and early access to all new creations!
        </h3>
        <div className="container">
          <div className="cta-container">
            <div className="cta-text-box">
              <form className="cta-form" name="sign-up">
                <div className="form-cell">
                  <label id="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div className="form-cell">
                  <label id="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>

                <div className="form-cell">
                  <label id="select-where">Where did you hear about us?</label>
                  <select id="select-where" name="select-where" required>
                    <option value="">Choose one:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button type="button" className="form-cell btn btn--form ">
                  <div className="btn-div">Sign up!</div>
                </button>
              </form>
            </div>
            <img
              className="cta-photo"
              src="/teddy-bear-and-rabbit.jpg"
              alt="Crochet teddy bear and rabbit in tree"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--primary-orange);

  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
  }

  .cta-container {
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;

    overflow: hidden;
    max-width: 120rem;
  }

  .cta-text-box {
    color: #45260a;
    align-content: center;
    padding: 0 3rem;
  }

  .cta-heading {
    padding-top: 5rem;
    text-align: center;
    padding-bottom: 0.4rem;
  }
  .cta-text {
    padding-bottom: 1.2rem;
    text-align: center;
  }
  .cta-photo {
    width: 80%;
    margin-right: 2.4rem;
    border: 1rem dashed var(--primary-yellow);
    border-radius: var(--radius);
  }

  .cta-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    justify-content: end;
    padding-bottom: 1rem;
  }
  .form-cell {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.1rem 0.1rem;
  }

  .form-cell > input,
  .form-cell > select {
    margin: auto;
    font-size: 1rem;
  }
  .cta-form label {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .cta-form input,
  .cta-form select {
    width: 80%;
    padding: 0.5rem 1rem;
    font-family: inherit;
    color: inherit;
    border: none;
    background-color: #fdf2e9;
    border-radius: var(--radius);
  }

  .cta-form input::placeholder {
    color: #aaa;
  }

  .cta-form button {
    align-self: end;
    width: 80%;
  }
  .btn-div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    .cta-photo {
      margin: 0;
      max-width: 25rem;
    }
    .cta-container {
      display: flex;
      flex-direction: column;
    }
    .cta-text-box {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 580px) {
    .cta-form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .cta-form label {
      margin-bottom: 0.5rem;
    }
    .btn--form {
      margin-top: 1rem;
      text-align: center;
    }
    .form-cell {
      min-width: 16rem;
    }
  }
`;
export default Contact;
