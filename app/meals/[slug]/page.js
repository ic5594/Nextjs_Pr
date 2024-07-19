export default function MealsPage({ params }) {
  return (
    <>
      <h1>Meals Page</h1>
      <p>{params.slug}</p>
    </>
  )
}