import Link from "next/link";
import { BrandConfig, BrandWithConfig } from "./interfaces";
import { ReactElement } from "react";

function formatMoney(amount: number) {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });
  return formatter.format(amount);
}

export function getFaqsWithConfigs(brandWithConfig: BrandWithConfig) {
  const brandConfig: BrandConfig = brandWithConfig.settings;
  const questions = [
    {
      category: "PREGUNTAS FRECUENTES AL VENDER",
      items: [
        {
          id: 1,
          question: "¿Cómo puedo publicar un producto para la venta?",
          answer: (
            <>
              ¡Publicar tu producto es muy fácil! Simplemente haz clic en{" "}
              <Link
                href="/sell"
                className="text-blue-600 hover:text-blue-800 font-normal"
              >
                “Vender”
              </Link>
              , crea una cuenta y sigue el proceso de publicación. Una vez que
              completes el formulario de venta, la publicación será revisada por
              nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si
              está aprobada o rechazada. Después de ser revisada y aprobada, se
              hará pública. Si hay algún problema, recibirás un correo
              electrónico pidiendo hacer cambios antes de que pueda ser aceptada.
            </>
          ),
        },
      ]
    }
  ]

  // Pregunta 2: Envío
  let question = "¿Cómo envío mi artículo después de que alguien lo compra?"
  let answer: ReactElement;

  if (brandConfig.blueExpress || brandConfig.homePickup) {
    answer = (
      <>
        Cuando alguien compre tu producto, recibirás un correo electrónico con las instrucciones para confirmar la venta, allí
        podrás {
          (brandConfig.blueExpress && brandConfig.homePickup) ?
          "elegir dos formas de envíar el producto" :
          "enviar el producto de la siguiente manera"
        }:
        <ul>
          {
            brandConfig.blueExpress && (
              <li>
                Llevar el producto a un punto Blue Express, utilizando una etiqueta de envío proporcionada por nosotros.
              </li>
            )
          }
          {
            brandConfig.homePickup && (
              <li>
                Solicitar una recolección del producto en tu domicilio por $2.990 (sólo en Santiago).
              </li>
            )
          }
        </ul>
      </>
    )
  } else {
    answer = (<>Envío no configurado. Por favor modifica la configuración de la marca {brandConfig.brandId}.</>)
  }

  questions[0].items.push({
    id: 2,
    question,
    answer,
  })

  // Pregunta 3: Pago
  question = "¿Cómo y cuándo recibo el pago?"

  if (brandConfig.hasCoupons || brandConfig.hasTransferPayment) {
    answer = (
      <>
        Una vez que tu artículo se entrega y es recibido conforme (manualmente por el comprador 
        o automáticamente después de 72 horas desde que se entregó el producto), recibirás un 
        correo electrónico {
          (brandConfig.hasCoupons && brandConfig.hasTransferPayment) ?
          `preguntándote cómo te gustaría recibir tu pago: en efectivo a través de una transferencia bancaria o en forma de una gift card (${brandConfig.couponPercentage}% del pago!).` :
          (brandConfig.hasTransferPayment) ?
          "para que ingreses tus datos bancarios y puedas recibir el pago a través de una transferencia bancaria." :
          `informandote sobre el recibo de tu giftcard (${brandConfig.couponPercentage}% del pago!).`
        }
      </>
    )
  } else {
    answer = (<>Pago no configurado. Por favor modifica la configuración de la marca {brandConfig.brandId}.</>)
  }

  questions[0].items.push({
    id: 3,
    question,
    answer,
  })

  // Pregunta 4: Tarifas
  question = "¿Hay cobros adicionales por vender mi producto por acá?"
  let couponText: ReactElement | null = null;
  let transferText: ReactElement | null = null;

  if (brandConfig.hasCoupons) {
    couponText = (
      <li>
        <span>
          <b>Gift Card:</b> Si eliges gift card, {
            brandConfig.couponPercentage < 100 ?
            `la tarifa es del ${brandConfig.couponPercentage}%` :
            '¡no hay tarifa!'
          }, es decir, vender un artículo por $100.000 te da 
          una gift card por {formatMoney(brandConfig.couponPercentage/100 * 100_000)} para volver a comprar en el Ecommerce 
          oficial de la marca. Esta será enviada a tu mail una vez que el pedido haya sido recibido 
          conforme por el comprador.
        </span>
      </li>
    )
  }

  if (brandConfig.hasTransferPayment) {
    transferText = (
      <li>
        <span>
          <b>Efectivo:</b> Si eliges efectivo, {
            brandConfig.transferPaymentPercentage < 100 ?
            `la tarifa es del ${brandConfig.transferPaymentPercentage}%` :
            '¡no hay tarifa!'
          }, es decir, vender un artículo por $100.000 te da {formatMoney(brandConfig.transferPaymentPercentage/100 * 100_000)}
          {" "}en efectivo. Esta tarifa la transferimos 
          directamente a tu cuenta una vez que el pedido haya sido recibido conforme por el comprador.
        </span>
      </li>
    )
  }

  // Me aseguro que si tiene cupones, las tarifas estén seteadas
  // Lo mismo para la transferencia
  const hasTariffs = (
    (brandConfig.hasCoupons && brandConfig.couponPercentage) ||
    (brandConfig.hasTransferPayment && brandConfig.transferPaymentPercentage)
  );

  if ((brandConfig.hasCoupons || brandConfig.hasTransferPayment) && hasTariffs) {
    answer = (
      <>
        Como vendedor/a tienes las siguientes opciones para recibir tu pago:
        <ul>
          {couponText}
          {transferText}
          <li>
            Si eligiste el retiro a domicilio de tus productos, se descontarán 
            los $2.990 por el costo de ese retiro.
          </li>
        </ul>
      </>
    )
  } else {
    console.log({hasTariffs, brandConfig});
    answer = (<>Tarifas no configuradas. Por favor modifica la configuración de la marca {brandConfig.brandId}.</>)
  }

  questions[0].items.push({
    id: 4,
    question,
    answer,
  })

  // Pregunta 5: Cupones
  if (brandConfig.hasCoupons) {
    question = "Política de uso de cupones"
    answer = (
      <>
        <p>Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:</p>
        <ul className="coupons-terms-list">
          <li>
            Se pueden utilizar únicamente para compras en el sitio web&nbsp;
            <Link
              href={brandWithConfig.url}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-normal"
            >
              {brandWithConfig.url}
            </Link>
            .
          </li>
          <li>
            Tiene un tiempo máximo para ser utilizado de 6 meses.
          </li>
          <li>
            Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.
          </li>
        </ul>
      </>
    )

    questions[0].items.push({
      id: 5,
      question,
      answer,
    })
  }
  
  return questions;
}