<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <script src="/js/swal.js"></script>

    <title> شاورنو - محصولات فروشگاه </title>

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
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <!-- item-->
                                    <a href="{{route('admin.test.add-test')}}" class="dropdown-item">افزودن محصول</a>

                                </div>
                            </div>
                            <h4 class="header-title">لیست محصولات</h4>
                            {{--<p class="text-muted font-14 mb-3">--}}
                            {{--Your awesome text goes here.Your awesome text goes here.--}}
                            {{--</p>--}}

                            <div class="table-responsive">
                                <table class="table table-dark mb-0 text-center">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>نام</th>
                                        <th>اسلاگ</th>
                                        <th>دسته بندی ها</th>
                                        <th>نوع محصول</th>
                                        <th>تصویر</th>
                                        <th>ویرایش</th>
                                        <th>حذف</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @php($i=1)
                                    @foreach($products as $product)

                                        <tr>
                                            <th scope="row">{{$i}}</th>
                                            <td>{{$product->name}}</td>
                                            <td>{{$product->slug}}</td>
                                            <td>
                                                @if($product->images()->exists())
                                                <img src="{{url('/')}}/{{$product->images->first()->image_path}}" width="50" height="50">
                                                    @else
                                                <button class="btn btn-danger" type="button"> ندارد</button>
                                                @endif
                                            </td>

                                            <td>
                                                @foreach($product->categories as $category)

                                                    {{$category->name}}
                                                    @endforeach

                                            </td>
                                            <td>{{ $product->productType->name  }}</td>
                                            <td>
                                       <a href="{{route('admin.product.edit',$product->id)}}" target="_blank">
                                                    <button type="submit" class="btn btn-info btn-small"><i
                                                                class="fa fa-question-circle"> ویرایش محصول </i>
                                                    </button>
                                       </a>
                                                </form>


                                            </td>

                                            <td>
                                                <form onsubmit="return confirm(this);" action="{{route('admin.product.destroy',$product->id)}}"
                                                      method="post" >
                                                    {{method_field('delete')}}
                                                    {{csrf_field()}}
                                                    <button type="submit" class="btn btn-danger btn-small"><i
                                                                class="fa fa-trash"> حذف محصول </i></button>
                                                </form>


                                            </td>
                                        </tr>
                                        @php($i++)
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
            title: 'از حذف این محصول اطمینان دارید؟',
            text: "این عملیات غیر قابل بازگشت است",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText:'انصراف',
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'حذف'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'حذف شد ',
                    'محصول مورد نظر شما حذف شد',
                    'success',
                    e.submit()
                )
            }
        })
    }

</script>
</body>

</html>