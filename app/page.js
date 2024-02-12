import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <ProductsPage /> */}
      <div className='text-gray-200'>
        <div className=' p-5'>
          <h1 className='font-bold text-5xl p-2 text-center'>Welcome to Smooth Operations!</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-5'>
          <div className='p-8 md:p-2 md:w-2/3'>
            <div className='flex flex-col justify-stretch md:pt-5 md:pl-10 gap-3'>
              <p> This page contains information about products for 2 companies. The businesses are called <a href='/company/1' className='text-blue-500'>ASEA</a> and <a href='/company/2' className='text-blue-500'>GOFINITY</a>. Each company manufactures products that benefit your health and wellness. My page puts a spotlight on some of the great items produced by these companies.</p>
              <p>I started promoting products for ASEA about 3 years ago. Their unique Redox Signaling molecules caught my attention. I had never heard of Redox Signaling but learned it's a function that's central to all life. Redox Signaling molecules are created within every cell of the body, and are vital to the immune system. The normal cellular health process can be enabled with a proper supply of Redox Signaling molecules. Vibrant cells can take over as damaged, dysfunctional cells fade away.</p>
              <p>I was introduced to GOFINITY by a friend. A sample of Beautonic was given to me and I found it absolutely delicious! Later, I learned GOFINITY founder Tymeka Lawrence started out helping other women challenged by their hair's health. Beautonic is one of many products which contain effective and safe ingredients to help from within. Around 2006 - 2007 Tymeka created Hairfinity. In 2020, the formulas were made better creating the Hairfinity Elite products. Years later, GOFINITY was launched. It makes Hairfinity Elite products available exclusively through GOFINITY Consultants and Ambassadors.</p>
              <p className='mt-3 text-3xl'>Thank you for taking the time to visit Smooth Operations!</p>
            </div>
          </div>

          <div>
            <Image
              src={'/SadePicture.png'}
              alt='Sade Pic'
              width={500}
              height={500}
            />
            <h3 className="text-center text-sm md:text-md">ASEA Associate, GOFINITY Consultant</h3>
          </div>
        </div>
        <div className='p-8 md:p-2'>
          <p className=' md:pl-10 md:pb-10 md:pb-5'>
            These <a href='/company' className='italic'>companies</a> provide products essential to your health and wellness. I use/used the majority of the products added to this site, and plan to use many more. I welcome the use of any products ASEA and GOFINITY offer because:

            I believe the creators want to provide safe, healthy products for anyone willing to help themselves.

            I have seen amazing results when using products from both companies!
          </p>
        </div>
      </div>
    </main>
  )
}
