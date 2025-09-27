import express from 'express'
import {
    createBlog,
    deleteBlogById,
    getAllBlogs,
    getBlogById,
    updateQueue,
} from './blog.service.js'
import { parseBlogQuery } from '../../utils/parseBlogQuery.js'
import logger from '../../utils/logger.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const filters = parseBlogQuery(req.query)
        const data = await getAllBlogs(filters)
        res.status(200).json(data)
    } catch (error) {
        logger.error(`GET / error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await getBlogById(id)
        res.status(200).json(data)
    } catch (error) {
        logger.error(`GET /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
   
    try {
      const { title, content, categoryId, userId } = req.body;
  
      // ✅ Validasi image wajib ada
      if (!req.files || !req.files.image || !req.files.image[0]) {
        return res.status(400).json({ error: 'Image is required' });
      }


  
      // ✅ Validasi field text
      if (
        !title?.trim() ||
        !content?.trim() ||
        categoryId === undefined ||
        userId === undefined
      ) {
        return res.status(400).json({ error: 'All fields are required' });
      }
     
      // ✅ Ambil file
      const imageFile = req.files.image[0];
      const pdfFile = req.files.pdf ? req.files.pdf[0] : null;
   
      // ✅ Data blog
      const blogData = {
        title: title.trim(),
        content: content.trim(),
        categoryId,
        userId,
        image: imageFile.filename,       // wajib
        pdf: pdfFile ? pdfFile.filename : null, // opsional
      };
    
      await createBlog(blogData);
     // return res.status(200).json({ error: pdfFile ? pdfFile.filename : null});
      res.status(201).json({ message: 'Blog created successfully' });
    } catch (error) {
      logger.error(`POST / error: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  });

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await deleteBlogById(id)

        res.status(200).json({ message: 'Delete Blog Successfully' })
    } catch (error) {
        logger.error(`DELETE /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { title, content, status, favorite, categoryId } = req.body

        if (
            !title ||
            !content ||
            !status ||
            favorite === undefined ||
            !categoryId
        ) {
            throw new Error('Semua field wajib diisi')
        }

        const isFavorite = favorite === 'true'
        await updateQueue(id, { ...payload, favorite: isFavorite })
        res.status(200).json({ message: 'Berhasil Mengubah Blog' })
    } catch (error) {
        logger.error(`PUT /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!req.body || Object.keys(req.body).length === 0) {
            throw new Error('Nothing to update')
        }

        const payload = { ...req.body }
       

        if (req.files) {
            const imageFile =req.files.image ? req.files.image[0] : null;  
            const pdfFile = req.files.pdf ? req.files.pdf[0] : null;
            if(imageFile){
                payload.image =  imageFile.filename 
            }

            if(pdfFile){
                payload.pdf =  pdfFile.filename 
            }
       
          //  payload.image = req.file.filename
        } else {
            delete payload.image
        }
        await updateQueue(id, payload)

        res.status(200).json({ message: 'Blog edited successfully' })
    } catch (error) {
        logger.error(`PATCH /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

export default router
