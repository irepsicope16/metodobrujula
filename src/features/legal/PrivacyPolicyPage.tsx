import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { OWNER_EMAIL } from '@/lib/membership'

const ACTUALIZADO = '21 de noviembre de 2026'

function Section({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-[17px] font-semibold tracking-tight text-foreground">{titulo}</h2>
      <div className="mt-2.5 space-y-3 text-[14px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b bg-surface/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[13px] font-semibold tracking-tight">
            <Compass className="h-4.5 w-4.5 text-primary" /> Método Brújula
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-[12px] font-medium tracking-[0.14em] text-faint uppercase">Legal</p>
        <h1 className="mt-2 text-[28px] font-semibold tracking-tight">Política de Privacidad</h1>
        <p className="mt-2 text-[13px] text-faint">Última actualización: {ACTUALIZADO}</p>

        <Section titulo="Responsable del tratamiento de los datos">
          <p>
            Esta plataforma es operada por la <strong className="text-foreground">Lic. Irene Morbidelli</strong>,
            Psicopedagoga (M.P. 260505), monotributista. Ante cualquier consulta sobre tus datos personales podés
            escribir a{' '}
            <a href={`mailto:${OWNER_EMAIL}`} className="text-primary hover:underline">
              {OWNER_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section titulo="Qué datos recopilamos">
          <p>
            <strong className="text-foreground">De cada profesional</strong> que crea una cuenta: nombre, apellido,
            email, título, número de matrícula, teléfono y moneda de trabajo.
          </p>
          <p>
            <strong className="text-foreground">De cada consultante</strong>, cargados por su profesional o por el
            propio consultante al autorregistrarse: nombre, apellido, fecha de nacimiento, escuela, curso, email,
            teléfono, motivo de consulta, foto (opcional), notas y observaciones profesionales, respuestas a
            actividades y cuestionarios de orientación vocacional, registros de sesiones, reflexiones personales,
            archivos que se suban a su ficha, y el consentimiento informado firmado digitalmente (incluida la imagen
            de la firma) cuando corresponda.
          </p>
        </Section>

        <Section titulo="Para qué usamos estos datos">
          <p>
            Exclusivamente para brindar el servicio de orientación vocacional dentro de la plataforma: organizar el
            proceso de cada consultante, generar informes y permitir que la profesional haga su seguimiento.{' '}
            <strong className="text-foreground">
              No vendemos ni compartimos estos datos con terceros con fines comerciales o publicitarios.
            </strong>
          </p>
        </Section>

        <Section titulo="Dónde se almacenan">
          <p>
            Los datos se guardan en la infraestructura en la nube de <strong className="text-foreground">Supabase</strong>{' '}
            (base de datos, autenticación y almacenamiento de archivos), con políticas de acceso que aíslan
            técnicamente la información: cada profesional solo puede ver y editar los datos de sus propios
            consultantes.
          </p>
        </Section>

        <Section titulo="Asistente de IA (opcional)">
          <p>
            Por defecto, el Asistente IA de la plataforma funciona de forma local, sin enviar datos a ningún
            servicio externo. Si una profesional decide activar el proveedor OpenAI de forma voluntaria (cargando su
            propia clave de API en Ajustes), un resumen del proceso del consultante en cuestión (notas de sesión,
            respuestas a actividades) se envía a los servidores de OpenAI para generar el borrador solicitado. Esa
            decisión depende enteramente de cada profesional, no es el comportamiento por defecto de la plataforma.
          </p>
        </Section>

        <Section titulo="Dictado por voz">
          <p>
            La función de dictado usa el reconocimiento de voz propio del navegador. El audio lo procesa el
            navegador o sistema operativo de quien lo usa, no un servidor de Método Brújula.
          </p>
        </Section>

        <Section titulo="Quién accede a los datos">
          <p>
            Cada profesional accede únicamente a los datos de sus propios consultantes. La titular de la plataforma
            puede acceder a la base de datos general con fines de soporte técnico, mantenimiento, o cuando así lo
            requiera una obligación legal.
          </p>
        </Section>

        <Section titulo="Tus derechos sobre tus datos">
          <p>
            De acuerdo con la Ley 25.326 de Protección de Datos Personales de la República Argentina, tenés derecho
            a acceder, rectificar, actualizar y solicitar la supresión de tus datos personales. Para ejercer
            cualquiera de estos derechos, escribí a{' '}
            <a href={`mailto:${OWNER_EMAIL}`} className="text-primary hover:underline">
              {OWNER_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section titulo="Conservación de los datos">
          <p>
            Tus datos se conservan mientras la cuenta esté activa. Si una membresía no se renueva, los datos quedan
            resguardados (no se eliminan automáticamente) salvo que la profesional titular de la cuenta solicite
            expresamente su baja total.
          </p>
        </Section>

        <Section titulo="Consultantes menores de edad">
          <p>
            Muchos de los procesos de orientación vocacional son con adolescentes. El consentimiento informado que
            se firma dentro de la plataforma corresponde al encuadre del proceso profesional, y no reemplaza la
            autorización de madres, padres o tutores para el tratamiento de los datos de un menor cuando esa
            autorización corresponda según el criterio y la práctica habitual de cada profesional.
          </p>
        </Section>

        <Section titulo="Seguridad">
          <p>
            Las contraseñas se gestionan a través del sistema de autenticación del proveedor de base de datos y
            nunca se almacenan en texto plano. El acceso a cada ficha está aislado por profesional.
          </p>
        </Section>

        <Section titulo="Cambios a esta política">
          <p>
            Esta política puede actualizarse para reflejar cambios en la plataforma o en la normativa vigente. La
            fecha de la última actualización figura al principio de esta página.
          </p>
        </Section>
      </main>
    </div>
  )
}
