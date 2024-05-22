import React from 'react';
import './menu.css'


const Menu = ({open, setOpen, header, items, main_items, logOut}) => {
    return (
        <div className={open ? 'menu active' : 'menu'} onClick={() => setOpen(false)}>
            <div className='blur'/>
            <div className='menu__content' onClick={e => e.stopPropagation()}>
                <div className='menu__header'>{header}</div>
                <ul className="menu__main-items">
                    {main_items?.map(item =>
                        <li>
                            <a href={item.href} onClick={
                                item.style === "btn-leave" ?
                                    logOut
                                    :
                                    null
                            } className={item?.style}>{item.value}</a>
                        </li>
                    )}
                </ul>
                <ul className="menu__items">
                    {items?.map(item =>
                        <li>
                            <a href={item.href} className={item?.style}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;