import logo from '../../assets/images/logo.svg'

export const Logo = (props) => {
    return (
      <div className='logo-wrapper'>
          <div className='logo-img'>
              <img src={logo} alt="logo goes here" />
          </div>
          <h2 className='logo-text'>BrandNameHere</h2>
      </div>
    )
  }