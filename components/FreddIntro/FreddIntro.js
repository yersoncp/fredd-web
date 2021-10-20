import s from './FreddIntro.module.css'

const FreddIntro = () => (
   <div className={s.fredd}>

      <div className={s.fredd__inner}>
         <h2 className={s.title}>
            Motor de recomendaciones basado en Inteligencia Artificial para <b>e-commerce</b>
         </h2>
         <h3 className={s.subtitle}>
            Algoritmos avanzados que genera recomendaciones personalizadas en web, móviles, correo electrónico y cualquier canal.
         </h3>
      </div>

      <br />

      <div className={s.fredd__featured}>
         <div>
            <p className={s.emoji}>🛍</p>
            <p>Recomendación de productos y contenido de alta calidad a tus clientes.</p>
         </div>
         <div>
            <p className={s.emoji}>👨🏻‍💻</p>
            <p>Incrementa la tasa de conversión, revenue y click-thru rate (CTR).</p>
         </div>
         <div>
            <p className={s.emoji}>🛒</p>
            <p>Adapta al comportamiento de los surtidos, precios y ofertas especiales.</p>
         </div>
      </div>

      <br />

      <div className={s.column_two}>
         <div>
            <h3>
               Ofrezca contenido relevante para cada cliente
            </h3>
            <p>Fredd se encarga de procesar datos y generar modelos avanzados a partir de las interacciones de los usuarios para mostrar contenido relevante.</p>
         </div>
         <div>
            <img src="images/fredd-product-recommended.svg" />
         </div>
      </div>

      <br />

      <div className={s.column_four}>
         <div>
            <h3>
               Recomendación de productos
            </h3>
            <p>Algoritmos avanzados para recomendar productos en base a otros productos.</p>
         </div>
         <div>
            <img src="images/fredd-item-item.svg" />
         </div>
      
         <div>
            <h3>
               Recomendación para tí
            </h3>
            <p>Procesamos tus interacciones para obtener una lista de produtos adaptado a tus preferencias.</p>
         </div>
         <div>
            <img src="images/fredd-item-user.svg" />
         </div>
      </div>

      <br />

      <div className="nell">
         <div>
            <h3 className={s.heading}>
               Genera recomendaciones personalizadas con la inteligencia de <b>Fredd</b>
            </h3>
         </div>
         {/* <p className={s.alignCenter}>
            Ofrece recomendaciones de última generación
         </p> */}
      </div>

      <div className={s.fredd__featured}>
         <div>
            <h4>1. Recolecta datos no estructurados</h4>
            <p>Nombre del producto, categoría, longevidad del producto, usuarios, etc...</p>
         </div>
         <div>
            <h4>2. Fredd AI procesa datos</h4>
            <p>Algoritmos avanzados de inteligencia artifical para recomendar mediante modelos de aprendizaje automático de vanguardia.</p>
         </div>
         <div>
            <h4>3. Muestra recomendaciones a clientes</h4>
            <p>Ofrecer recomendaciones de alto valor en cualquier punto de contacto de los clientes.</p>
         </div>
      </div>

   </div>
)

export default FreddIntro;