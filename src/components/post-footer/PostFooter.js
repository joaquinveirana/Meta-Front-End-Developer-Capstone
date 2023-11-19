import './PostFooter.css';

const PostFooter = () => {
  return (
    <footer className='postfooter'>
      <p>
        This webpage is the final assignment of the Meta Front End Developer
        Certificate and was created by Joaquín Veirana. Feel free to visit my{' '}
        <a href='https://www.linkedin.com/in/joaquin-veirana/'>Linkedin</a>,{' '}
        <a href='https://www.joaquinveirana.com/'>webpage</a> and my{' '}
        <a href='https://github.com/joaquinveirana'>GitHub</a>!
      </p>
      <p>
        Credits to Pexel, Unsplash for the free stock images used, also to
        Stable Diffusion for the chef images, to Chat GPT for the text generated
        and to thispersondoesnotexist.com for the profile pics. PD: Credits to{' '}
        <a href='https://codepen.io/fidalgodev/pen/bOGaVy'>@fidalgodev</a> for
        the styles of the inputs in the login screen.
      </p>
    </footer>
  );
};

export default PostFooter;
