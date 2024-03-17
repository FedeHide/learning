import PropTypes from 'prop-types';
import { useFetchData } from "../hooks/useFetchData"

export const UserList = ({ endPoint }) => {

    const { data, isLoading } = useFetchData(endPoint)

    return (
        <ul>
            { isLoading 
                ? <p>Loading...</p> 
                : endPoint === 'users' 
                    ? data.map(user => <li key={user.id}>{user.name}</li>)
                    : data.map(item => <li key={item.id}>{item.body}</li>)
            }
        </ul>
    );
};

UserList.propTypes = {
    endPoint: PropTypes.string.isRequired,
};
