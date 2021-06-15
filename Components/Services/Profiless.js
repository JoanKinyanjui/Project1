import './Profile.css';


function Profiles(props){
    return(
        <div className='Profiles'>
            <div className='Profilegallery'>
            <img className='Profileimg' src={props.src1}/>
            <img className='Profileimg' src={props.src2}/>
            <img className='Profileimg' src={props.src3}/>
            </div>
            <div className='Profileservices'>
                <ul className='Profileul'>
                    <li className='Profileli'>
                        {props.service1}
                    </li>
                    <li className='Profileli'>
                        {props.service2}
                    </li>
                    <li className='Profileli'>
                        {props.service3}
                    </li>
                    <li className='Profileli'>
                        {props.service4}
                    </li>
                    <li className='Profileli'>
                        {props.service5}
                    </li>
                </ul>
                <div className='Profileservices'>
                    <ul className='Profileul'>
                    <li className='Profileli'>
                        {props.day1}
                    </li>
                        <li className='Profileli'>
                        {props.day2}
                    </li>
                        <li className='Profileli'>
                        {props.day3}
                    </li>
                        <li className='Profileli'>
                        {props.day4}
                    </li>
                        <li className='Profileli'>
                        {props.day5}
                    </li>
                        <li className='Profileli'>
                        {props.day6}
                    </li>
                        <li className='Profileli'>
                        {props.day7}
                    </li>
                </ul>
                </div>
            </div>

        </div>
    )
}
export default Profiles;