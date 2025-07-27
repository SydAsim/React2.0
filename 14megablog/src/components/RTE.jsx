import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
// React Hook Form works great with uncontrolled inputs (<input>, <textarea>, etc
//but some libraries (like TinyMCE, Material UI, etc.) 
//use controlled components — components that don’t expose ref or behave like standard form elements.
// To make them work with react-hook-form, you use Controller.

export default function RTE({ name, label, control,
    defaultValue = "" }) {
    return (<div>
        {label &&
            <label className='inline-block mb-1 pl-1'>
                {label} </label>}

        <Controller
            name={name || "content"} // The name used in the form state. Default = "content"
            control={control}  // Passed from useForm()

            render={({ field: { onChange } }) => (
                <Editor
                    apiKey="31tl9nzjcnu9bv17c3m871c1leatxp6ccewabhtti6lbpcim31tl9nzjcnu9bv17c3m871c1leatxp6ccewabhtti6lbpcim"

                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                />
            )}


        />
    </div>






    )
}

