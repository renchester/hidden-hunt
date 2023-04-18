import githubIcon from '../assets/img/github-icon.png';

function Footer() {
  return (
    <footer className="w-full py-3 bg-gray-200 flex flex-col items-center gap-2">
      <a
        href="https://github.com/renchester"
        target="_blank"
        className="flex items-center gap-3"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="Github icon" className="w-[22px] h-[22px]" />
        <p className="footer__desc">Developed by Renchester Ramos</p>
      </a>
      <small className="footer__copyright">
        &copy; Copyright {new Date().getFullYear()} Renchester Ramos. All rights
        reserved.{' '}
      </small>
    </footer>
  );
}

export default Footer;
