<template>
  <table>
    <tbody>
      <tr>
        <td colspan="6" rowspan="1">
          <p class="flex-bewtween">
            <strong>Nivel del Use Case:</strong>
            <span>
              <input type="radio" disabled /> Negocio
            </span>
            <span>
              <input type="radio" disabled checked /> Sistema de Información
            </span>
          </p>
        </td>
      </tr>
      
      <tr>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Nombre del Use Case:</strong>
            <span>Registrar Pedido</span>
          </p>
        </td>
        <td colspan="3" rowspan="1">
          <p>
            <strong>ID:</strong>
            <span>01</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Actor Principal:</strong>
            <span>Vendedor</span>
          </p>
        </td>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Actor Secundario:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p class="flex-bewtween">
            <strong>Tipo de Use Case:</strong>
            <span>
              <input type="radio" disabled checked/> Concreto
            </span>
            <span>
              <input type="radio" disabled /> Abstracto
            </span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Objetivo:</strong>
            <span>Registrar un nuevo pedido</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Precondiciones:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="2">
          <p>
            <strong>Post - Condiciones</strong>
          </p>
        </td>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Éxito:</strong>
            <span>El pedido fue registrado con éxito</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Fracaso:</strong>
          </p>
          <ul class="ul-table">
            <li>
              <span>Opción Cancelar</span>
            </li>
          </ul>
        </td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p class="center">
            <strong>Curso Normal</strong>
          </p>
        </td>
        <td colspan="3" rowspan="1">
          <p class="center">
            <strong>Alternativas</strong>
          </p>
        </td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>01. El caso de uso comienza cuando el Vendedor (V) selecciona la opción RegistrarPedido.</span>
          </p>
        </td>
       <td colspan="3" rowspan="1"></td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>02. El sistema solicita que se ingrese el nombre del cliente.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>03. El V ingresa el nombre del cliente.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>04. El sistema solicita que ingrese el tel&eacute;fono del cliente.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>05. El V ingresa el tel&eacute;fono del cliente.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>06. El sistema solicita que se seleccione el tipo de entrega para el pedido.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>07. El V selecciona la opción Mostrador y es así.</span>
          </p>
        </td>
          <td class="width-50" colspan="3" rowspan="1">
            <ol class="ol-table" start="7">
              <li>Elige la opción Domicilio.</li>
              <ol class="ol-table" type="A">
                <li>El sistema solicita que se seleccione la localidad correspondiente.</li>
                <li>El V selecciona la localidad correspondiente.</li>
                <li>El sistema solicita que se seleccione el barrio correspondiente de dicha localidad.</li>
                <li>El V selecciona el barrio correspondiente.</li>
                <li>El sistema solicita que se selección la calle correspondiente de ese barrio.</li>
                <li>El V selecciona la calle correspondiente.</li>
                <li>El sistema solicita que se ingrese la altura correspondiente.</li>
                <li>El V ingresa la altura correspondiente.</li>
                <li>El V selecciona la opción Calcular Costo de Envió.</li>
                <li>Llamar Caso de Uso &ldquo;Calcular Costo de Envió&rdquo;.</li>
                <li>El sistema muestra el costo del envió.</li>
              </ol>
            </ol>
          </td>
        </td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>08. El sistema solicita que seleccione la variedad de la pizza.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>09. El V selecciona una variedad.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>10. El sistema solicita que selección el tipo.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>11. El V selecciona el tipo.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>12. El sistema solicita que se seleccione el tamaño.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>13. El V selecciona el tamaño.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>14. El sistema solicita que se ingrese la cantidad de pizzas con las características anteriormente seleccionadas.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>15. El sistema solicita que se seleccione la confirmación de la agregación de dicha pizza.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>16. El V selección la opción Agregar.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>17. El sistema muestra el registro con los siguientes datos: Variedad, Tipo, Tamaño, Cantidad, SubTotal.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>18. El sistema calculara el monto total del pedido.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>19. El sistema solicita la confirmación del pedido.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>20. El V selecciona la opción Aceptar.</span>
          </p>
        </td>
          <td class="width-50" colspan="3" rowspan="1">
            <ol class="ol-table" start="20">
              <li>Opción Cancelar.</li>
              <ol class="ol-table" type="A">
                <li>El sistema muestra la situación.</li>
                <li>Cancelar Caso de Uso.</li>
              </ol>
            </ol>
          </td>
        </td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>21. El sistema registra el pedido con los siguientes datos:</span>
              <p>Fecha, Hora, NombreCliente, TelefonoCliente, Localidad, Barrio, Calle, Altura, Variedad, Tipo, Tamaño, Cantidad</p>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <span>22. Fin Caso de Uso.</span>
          </p>
        </td>
        <td colspan="3" rowspan="1"></td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p></p>
        </td>
        <td colspan="3" rowspan="1">
          <p></p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Observaciones:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Asociaciones de Extensión:</strong>
            <span>Calcular Costo de Envio</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Asociaciones de Inclusión:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Use Case donde se incluye:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Use Case al que extiende:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="6" rowspan="1">
          <p>
            <strong>Use Case de Generalización:</strong>
            <span>No aplica</span>
          </p>
        </td>
      </tr>

      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <strong>Autor:</strong>
            <span>Plan 111mil</span>
          </p>
        </td>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Fecha Creación:</strong>
            <span>01/06/2018</span>
          </p>
        </td>
      </tr>
      
      <tr>
        <td class="width-50" colspan="3" rowspan="1">
          <p>
            <strong>Autor Última Modificación:</strong>
            <span>Plan 111mil</span>
          </p>
        </td>
        <td colspan="3" rowspan="1">
          <p>
            <strong>Fecha última Modificación</strong>
            <span>12/06/2018</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {};
</script>

<style scoped>
  p {
    padding: .25rem .5rem;
    margin: 0;
  }

  table td,
  table th {
    padding: 0;
    margin: 0;
  }

  strong {
    font-weight: bold;
    padding-right: .5rem;
  }

  .flex-bewtween {
    display: flex;
    justify-content: space-between;
  }

  .width-50 {
    width: 50%;
  }

  .ul-table, .ol-table {
    margin: 0;
    padding: .5rem .5rem .5rem 2.25rem;
    line-height: 1.5rem;
  }

  .ol-table li {
    margin-bottom: .25rem;

  }

  .center {
    text-align: center;
  }
</style>
