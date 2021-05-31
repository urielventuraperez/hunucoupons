import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(5) * 2,
      marginBottom: theme.spacing(5) * 2,
    },
  }));

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container} display="flex" flexDirection="column" m={4}>
    <CssBaseline />
      <Typography variant="h3" gutterBottom>Aviso de privacidad</Typography> 
      <Typography variant="body2" gutterBottom>
      Cuponesh S.A. de C.V., pone a su disposición este
      aviso de privacidad para informarle de nuestros procedimientos y políticas
      con respecto al tratamiento de su información, así como los derechos y
      obligaciones que usted tiene en relación al procesamiento de la misma. A
      menos que sea especificado de forma distinta en el Aviso de Privacidad,
      los términos utilizados en este documento tienen el mismo significado
      determinado en nuestros Términos de Uso.
      </Typography>
      <Typography variant="body1" gutterBottom>
      Uso de información personal
      </Typography>
      Cuponesh puede utilizar su Información Personal en las siguientes
      actividades: Para contactarle y contestar cualquier solicitud que haya
      enviado a través de los sitios de Cuponesh; Para enviarle material de
      marketing sobre nuestros servicios y soluciones, de acuerdo con sus
      intereses; Realizar encuestas de satisfacción a nuestros clientes;
      Administrar y contestar los comentarios o solicitudes realizadas en
      nuestros blogs, de los cuales usted puede participar; Desarrollar campañas
      de marketing; Cuponesh no cede, renta, asigna, transfiere ni proporciona
      su Información Personal a terceros sin su previo consentimiento por
      escrito, excepto cuando (i) es generalmente conocida por el público en el
      momento de la divulgación o se vuelve de dominio público a través de
      ningún acto ilícito por parte de Cuponesh; (ii) está en posesión de
      Cuponesh al momento de la divulgación, sin que Cuponesh incumpla ninguna
      obligación legal; (iii) se vuelva de conocimiento de Cuponesh por fuentes
      ajenas a la parte divulgadora, pero con el derecho legal de divulgar dicha
      Información Personal; (iv) deba ser divulgada por Cuponesh para cumplir
      con las leyes o regulaciones gubernamentales aplicables. 
      <Typography variant="body1" gutterBottom>Cuánto tiempo
      conservamos su información</Typography> 
      Si usted es actualmente un cliente, Cuponesh
      almacenará y protegerá su Información Personal conforme a lo estipulado en
      el acuerdo correspondiente. Las obligaciones de confidencialidad
      establecidas en el contrato permanecerán ejecutables durante la vigencia
      de la relación de negocios de las partes y después de la fecha en que cese
      dicha relación de negocios como se indica en el acuerdo regulador.
      <Typography variant="body1" gutterBottom>
      Seguridad e Integridad de la información  
      </Typography> La Información Personal, que
      pueda usted proveer, será almacenada y protegida de acuerdo con los
      estándares de la industria y la tecnología. A pesar de lo anterior, el
      internet no es un ambiente 100% seguro, por lo que Cuponesh no puede
      asegurar que las transmisiones en internet serán completamente privadas o
      seguras, y usted comprende que cualquier mensaje o información que envíe a
      Cuponesh puede ser leída o interceptada por terceras partes, aún y cuando
      la información esté encriptada. 
      <Typography variant="body1" gutterBottom>Sus derechos</Typography>
       En cualquier momento, usted
      tiene el derecho de acceder y solicitar una copia de su Información
      Persona; solicitar que su Información Personal sea rectificada o revocada;
      y limitar su uso o divulgación. Usted puede hacerlo al: Actualizar sus
      preferencias de email (a qué emails los recibe) al hacer clic en el
      hipervínculo con la leyenda email preferences / preferencias de email que
      se ubica en la parte inferior de cada correo electrónico que le enviamos.
      Una vez que haya dado clic podrá seleccionar qué emails prefiere recibir
      de Cuponesh. preferencias de email Enviar un correo con su solicitud al
      info@cuponesh.com.mx; o Enviarnos una carta o notificación a la siguiente
      dirección: Calle 30 SN, Centro, 97350 Hunucmá, Yucatán, México. 
      <Typography variant="body1" gutterBottom>Cláusulas
      generales</Typography> 
      Cuponesh se reserva el derecho de hacer cambios a este Aviso de
      Privacidad, y Cuponesh puede publicarlo a través de su sitio web:
      www.cuponesh.com.mx. De acuerdo con la regulación del Parlamento Europeo
      (EU) 2016/679 y del Consejo del 27 de abril de 2016 en acuerdo a la
      protección de personas naturales con respecto al procesamiento de la
      Información Personal y del libre movimiento de dicha información, y
      derogando la Directiva 95/46/EC (en adelante referida como “Reglamento
      General de Protección de Datos” o “GDPR”), Cuponesh asegura el cumplimento
      del GDPR. Al proveer su información usted está de acuerdo con los términos
      y condiciones aquí establecidos; por lo que, si usted desea que Cuponesh
      no recolecte su Información Personal, por favor absténgase de proveerla.
      <Typography variant="body1" gutterBottom>Última revisión mayo de 2021.</Typography>
    </Box>
  );
};

export default PrivacyPolicy;
