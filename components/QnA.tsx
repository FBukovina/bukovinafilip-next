export default function QnA(){
  const questions = [
    "How much does it cost?",
    "What if I don't like the design?",
    "Can I refund the design?",
    "How you can reach me?",
    "labuLink and Quip Social"
  ]
  return (
    <section className="container my-24">
      <h2 className="text-4xl font-semibold">Q &amp; A.</h2>
      <ul className="mt-8 grid md:grid-cols-2 gap-4">
        {questions.map((q) => (
          <li key={q} className="card p-6">{q}</li>
        ))}
      </ul>
    </section>
  )
}
