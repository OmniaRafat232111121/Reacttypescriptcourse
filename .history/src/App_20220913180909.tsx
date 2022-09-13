interface  AppProps{
  headerText:string
}
export default function App({headerText,extra}:AppProps){
  return(
    <>
    <h1>{headerText}</h1>
    <p>{extra}</p>
    </>

  );
}