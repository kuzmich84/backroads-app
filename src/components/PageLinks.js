import { navLinks } from './data'

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {navLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={childClass}>
              {' '}
              {link.title}{' '}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
