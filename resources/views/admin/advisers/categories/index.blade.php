<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <script src="/js/swal.js"></script>

    <title> شاورنو - دسته بندی مشاوران </title>

    <style>
        .add-cat>span{
            font-style: normal;
            color: #f2f2f2;
            font-size: 20px;
            float: right;

        }
    </style>
</head>

<body>

<!-- Begin page -->
<div id="wrapper">
@include('includes.panel.topBar')
@include('includes.panel.leftSideBar')



<!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="card-box">
                            <div class="dropdown float-right">
                                <a href="{{route('admin.advisers.categories.create')}}" class="dropdown-toggle arrow-none card-drop" style="display: block">

                                    <i class="mdi mdi-plus-circle add-cat" style="font-size:30px;"><span>افزودن دسته بندی</span></i>

                                </a>
                            </div>
                            <h4 class="header-title">لیست دسته بندی مشاوران</h4>
                            {{--<p class="text-muted font-14 mb-3">--}}
                            {{--Your awesome text goes here.Your awesome text goes here.--}}
                            {{--</p>--}}

                            <div class="table-responsive">
                                <table class="table table-dark mb-0 text-center">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>نام</th>
                                        <th>دسته بندی پدر</th>
                                        <th>ویرایش</th>
                                        <th>حذف</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($categories as $category)
                                        <tr>
                                            <th scope="row">{{$category->id}}</th>
                                            <td>{{$category->name}}</td>
                                            <td>{{$category->parent_category_id!=null?\App\Adviser_category::find($category->parent_category_id)->name:'ندارد'}}</td>

                                            <td>
                                                <a href="{{route('admin.advisers.categories.edit',[$category->id])}}"
                                                   class="btn btn-primary">
                                                    <i class="fa fa-info-circle"> ویرایش </i>
                                                </a>
                                            </td>

                                            <td>
                                                <form onsubmit="return confirm(this);"
                                                      action="{{route('admin.advisers.categories.destroy',['category'=>$category->id])}}"
                                                      method="post">
                                                    {{method_field('delete')}}
                                                    {{csrf_field()}}
                                                    <button type="submit" class="btn btn-danger btn-small"><i
                                                                class="fa fa-trash"> حذف مشاور </i></button>
                                                </form>


                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>


            </div> <!-- container-fluid -->

        </div> <!-- content -->

        @include('includes.panel.footer')

    </div>

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->


</div>
<!-- END wrapper -->

@include('includes.panel.rightSideBar')


@include('includes.panel.footerLinks')
<script>
    CKEDITOR.replace('description');

    function confirm(e) {
        event.preventDefault();
        Swal.fire({
            title: 'از حذف این تیکت اطمینان دارید؟',
            text: "این عملیات غیر قابل بازگشت است",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'انصراف',
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'حذف'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'حذف شد ',
                    'تیکت مورد نظر شما حذف شد',
                    'success',
                    e.submit()
                )
            }
        })
    }

</script>
</body>

</html>