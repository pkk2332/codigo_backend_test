import React from 'react';
import { CBadge, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { isLogin } from '../containers/TheContent';
import { useHistory } from 'react-router-dom';

const TheHeaderDropdown = () => {
	const history = useHistory();
	return (
		<CDropdown inNav className="c-header-nav-items mx-2" direction="down">
			<CDropdownToggle className="c-header-nav-link" caret={false}>
				<div className="c-avatar">
					<CImg src={'avatars/6.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
				</div>
			</CDropdownToggle>
			<CDropdownMenu className="pt-0" placement="bottom-end">
				<CDropdownItem>
					<CIcon name="cil-lock-locked" className="mfe-2" />
					{isLogin() ? (
						<div
							onClick={() => {
								localStorage.removeItem('token');
								history.push('login');
							}}
						>
							Logout
						</div>
					) : (
						<div onClick={() => history.push('login')}> Login</div>
					)}
				</CDropdownItem>
			</CDropdownMenu>
		</CDropdown>
	);
};

export default TheHeaderDropdown;
