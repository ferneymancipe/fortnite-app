import { Alert }  from 'react-bootstrap/';

const AlertInfoError = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>¡Oh, disculpas amigo, tenemos un error!</Alert.Heading>
            <p>Tenemos inconvenientes en este momento para mostrarte la información, por favor intenta más tarde</p>
        </Alert>
    );
}
 
export default AlertInfoError;