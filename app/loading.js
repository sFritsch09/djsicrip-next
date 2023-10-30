import { Logo } from './_components';
import { LoadingWrapper } from '../styles/loading.styles';

export default function Test() {
	return (
		<LoadingWrapper>
			<Logo animation={true} vinyl={false} />
		</LoadingWrapper>
	);
}
