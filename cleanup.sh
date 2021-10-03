# Source: https://whitep4nth3r.com/blog/how-to-set-up-new-next-js-projects-with-bash-script
# Command example:./cleanup.sh -lang="en" --appname="metalandcoffee.com" --dir=.
# Input flags

LANG=""
APP_NAME=""

# The directory path must be relative to where the script lives
DIR=""

# Loop through arguments and process them
for arg in "$@"
do
    case $arg in
        -h|--help)
        echo "⚡️ Example script usage ⚡️"
        echo "./reset-next.sh --lang=en --appname=\"my cool app\" --dir=this-test"
        shift
        exit;
        ;;
        -l=*|--lang=*)
        LANG="${arg#*=}"
        shift
        ;;
        -a=*|--appname=*)
        APP_NAME="${arg#*=}"
        shift
        ;;
        -d=*|--dir=*)
        DIR="${arg#*=}"
        shift
        ;;
    esac
done

change_dir () {
  echo "✨ Changing directory to $1"
  cd $1
}

delete_vercel_svg () {
  echo "❌ Deleting vercel.svg"
  rm public/vercel.svg
}

delete_home_css () {
  echo "❌  Deleting Home.module.css"
  rm styles/Home.module.css
}

add_custom_document () {
  echo "✅ Adding custom _document.js with lang=$LANG"
  cd pages
  echo 'import Document, { Html, Head, Main, NextScript } from "next/document";
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="'$LANG'">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  export default MyDocument;' >> _document.js
  cd ..
}

replace_index () {
  echo "✅  Replacing pages/index.js"
  cd pages
  rm index.js
  echo 'import Head from "next/head";
  export default function Home() {
    return (
      <>
        <Head>
          <title>'$APP_NAME'</title>
          <meta name="description" content="Description for '$APP_NAME'" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>This new Next.js app has been reset!</h1>
        </main>
      </>
    );
  }' >> index.js
  cd ..
}

replace_globals_css () {
  echo "✅  Replacing styles/globals.css"
  cd styles
  rm globals.css
  echo 'html {
  font-size: 100%;
}
body {
  font-size: 1rem;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
* {
  box-sizing: border-box;
}
' >> globals.css
  cd ..
}

echo "🔥 Resetting Next.js app in $DIR"
echo "✨ Language: $LANG"
echo "✨ App name: $APP_NAME"

change_dir $DIR
delete_vercel_svg
delete_home_css
add_custom_document
replace_index
replace_globals_css

echo "✨ Opening project in VSCode"
code .

echo "📣 DONE. Have a nice day!"